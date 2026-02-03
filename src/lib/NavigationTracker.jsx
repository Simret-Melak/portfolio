import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function NavigationTracker() {
    const location = useLocation();
    const { isAuthenticated, user } = useAuth();

    // Log user activity when navigating to a page
    useEffect(() => {
        const pathname = location.pathname;
        let pageName = 'Home';

        if (pathname !== '/') {
            // Remove leading slash and get the first segment
            const pathSegment = pathname.replace(/^\//, '').split('/')[0];
            
            // Convert to a readable page name
            if (pathSegment) {
                pageName = pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1);
            }
        }

        // Track page views (for portfolio analytics)
        if (pageName) {
            logPageView(pageName);
        }
        
        // If authenticated, also log user-specific activity
        if (isAuthenticated && user) {
            logUserActivity(pageName, user.id || user.email);
        }

    }, [location, isAuthenticated, user]);

    return null;
}

// Helper function to log page views
function logPageView(pageName) {
    // You can implement your analytics here:
    
    // 1. Console log (for development)
    console.log(`Page viewed: ${pageName}`);
    
    // 2. Send to analytics service (e.g., Google Analytics)
    if (window.gtag) {
        window.gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    
    // 3. Send to your own API
    if (process.env.NODE_ENV === 'production') {
        // Example: Send to your analytics endpoint
        fetch('/api/analytics/page-view', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: pageName,
                path: window.location.pathname,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent,
                referrer: document.referrer || 'direct'
            }),
            // Use keepalive to ensure the request is sent even if page is unloading
            keepalive: true
        }).catch(() => {
            // Silently fail - analytics shouldn't break the app
        });
    }
}

// Helper function to log user activity
function logUserActivity(pageName, userId) {
    if (process.env.NODE_ENV === 'production') {
        fetch('/api/analytics/user-activity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: userId,
                page: pageName,
                path: window.location.pathname,
                timestamp: new Date().toISOString(),
                action: 'navigation'
            }),
            keepalive: true
        }).catch(() => {
            // Silently fail
        });
    }
}