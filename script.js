function toggleSidebar() {
    const sideNav = document.getElementById('sideNav');
    const body = document.body;
    if (sideNav) {
        const isCollapsed = sideNav.classList.toggle('collapsed');
        if (window.innerWidth <= 769) {
            if (isCollapsed) {
                body.classList.add('sidebar-open');
            } else {
                body.classList.remove('sidebar-open');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarToggleFloat = document.getElementById('sidebarToggleFloat');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleSidebar();
        }, true)
    }
    
    if (sidebarToggleFloat) {
        sidebarToggleFloat.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleSidebar();
        }, true);
    }

    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 769) {
            const sideNav = document.getElementById('sideNav');
            const sidebarToggle = document.getElementById('sidebarToggle');
            const sidebarToggleFloat = document.getElementById('sidebarToggleFloat');
            const body = document.body;
            
            if ((sidebarToggle && sidebarToggle.contains(event.target)) ||
                (sidebarToggleFloat && sidebarToggleFloat.contains(event.target))) {
                return;
            }
            
            if (sideNav && sideNav.classList.contains('collapsed')) {
                if (!sideNav.contains(event.target)) {
                    sideNav.classList.remove('collapsed');
                    body.classList.remove('sidebar-open');
                }
            }
        }
    });

    window.addEventListener('resize', function() {
        const sideNav = document.getElementById('sideNav');
        const body = document.body;
        if (window.innerWidth > 769 && sideNav) {
            sideNav.classList.remove('collapsed');
            body.classList.remove('sidebar-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', loadCards);
