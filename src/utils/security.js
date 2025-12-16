/**
 * Security utility functions for form protection
 */

/**
 * Check if user has exceeded rate limit for a specific action
 * @param {string} key - Unique identifier for the action (e.g., 'contact-form', 'newsletter')
 * @param {number} limitSeconds - Time limit in seconds between submissions
 * @returns {boolean} - True if rate limit exceeded, false if allowed
 */
export function checkRateLimit(key, limitSeconds = 60) {
    try {
        const lastSubmitKey = `lastSubmit_${key}`;
        const lastSubmit = localStorage.getItem(lastSubmitKey);

        if (!lastSubmit) {
            return false; // No previous submission, allow
        }

        const lastSubmitTime = parseInt(lastSubmit, 10);
        const currentTime = Date.now();
        const timeDiff = (currentTime - lastSubmitTime) / 1000; // Convert to seconds

        if (timeDiff < limitSeconds) {
            return true; // Rate limit exceeded
        }

        return false; // Enough time has passed, allow
    } catch {
        return false; // On error, allow submission (fail open)
    }
}

/**
 * Record a submission timestamp for rate limiting
 * @param {string} key - Unique identifier for the action
 */
export function recordSubmission(key) {
    try {
        const lastSubmitKey = `lastSubmit_${key}`;
        localStorage.setItem(lastSubmitKey, Date.now().toString());
    } catch {
        // Ignore storage errors
    }
}

/**
 * Get remaining time until next submission is allowed
 * @param {string} key - Unique identifier for the action
 * @param {number} limitSeconds - Time limit in seconds
 * @returns {number} - Seconds remaining, or 0 if allowed
 */
export function getRateLimitRemaining(key, limitSeconds = 60) {
    try {
        const lastSubmitKey = `lastSubmit_${key}`;
        const lastSubmit = localStorage.getItem(lastSubmitKey);

        if (!lastSubmit) {
            return 0;
        }

        const lastSubmitTime = parseInt(lastSubmit, 10);
        const currentTime = Date.now();
        const timeDiff = (currentTime - lastSubmitTime) / 1000;
        const remaining = Math.max(0, limitSeconds - timeDiff);

        return Math.ceil(remaining);
    } catch {
        return 0;
    }
}

/**
 * Sanitize user input by trimming and removing potentially harmful characters
 * @param {string} input - User input string
 * @param {number} maxLength - Maximum allowed length
 * @returns {string} - Sanitized input
 */
export function sanitizeInput(input, maxLength = 1000) {
    if (typeof input !== 'string') {
        return '';
    }

    // Trim whitespace
    let sanitized = input.trim();

    // Limit length
    if (maxLength && sanitized.length > maxLength) {
        sanitized = sanitized.substring(0, maxLength);
    }

    return sanitized;
}

/**
 * Enhanced email validation beyond HTML5
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if valid email format
 */
export function validateEmail(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }

    // RFC 5322 compliant email regex (simplified)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    // Additional checks
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }

    const [localPart, domain] = parts;

    // Check local part length
    if (localPart.length > 64) {
        return false;
    }

    // Check domain has at least one dot
    if (!domain.includes('.')) {
        return false;
    }

    // Check domain length
    if (domain.length > 255) {
        return false;
    }

    return true;
}

/**
 * Detect potential spam patterns in message content
 * @param {string} message - Message content to check
 * @returns {boolean} - True if spam detected
 */
export function detectSpam(message) {
    if (!message || typeof message !== 'string') {
        return false;
    }

    const lowerMessage = message.toLowerCase();

    // Check for excessive URLs (more than 3)
    const urlRegex = /(https?:\/\/[^\s]+)/gi;
    const urls = message.match(urlRegex) || [];
    if (urls.length > 3) {
        return true;
    }

    // Common spam keywords
    const spamKeywords = [
        'viagra', 'cialis', 'casino', 'lottery', 'winner',
        'click here now', 'buy now', 'limited time offer',
        'act now', 'free money', 'make money fast'
    ];

    for (const keyword of spamKeywords) {
        if (lowerMessage.includes(keyword)) {
            return true;
        }
    }

    // Check for excessive capitalization (more than 50%)
    const capitals = message.replace(/[^A-Z]/g, '').length;
    const letters = message.replace(/[^A-Za-z]/g, '').length;
    if (letters > 0 && (capitals / letters) > 0.5) {
        return true;
    }

    return false;
}

/**
 * Validate name field (no numbers, reasonable length)
 * @param {string} name - Name to validate
 * @returns {boolean} - True if valid name
 */
export function validateName(name) {
    if (!name || typeof name !== 'string') {
        return false;
    }

    const trimmedName = name.trim();

    // Check length
    if (trimmedName.length < 2 || trimmedName.length > 100) {
        return false;
    }

    // Allow letters, spaces, hyphens, apostrophes, and common international characters
    const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

    if (!nameRegex.test(trimmedName)) {
        return false;
    }

    // Check for excessive special characters
    const specialChars = trimmedName.replace(/[a-zA-ZÀ-ÿ\s]/g, '').length;
    if (specialChars > trimmedName.length * 0.2) {
        return false;
    }

    return true;
}

/**
 * Validate phone number format (optional field)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid or empty
 */
export function validatePhone(phone) {
    if (!phone || phone.trim() === '') {
        return true; // Optional field
    }

    // Remove common formatting characters
    const cleaned = phone.replace(/[\s\-()+\\]/g, '');

    // Check if it's all digits (with optional + at start)
    const phoneRegex = /^\+?\d{7,15}$/;

    return phoneRegex.test(cleaned);
}
