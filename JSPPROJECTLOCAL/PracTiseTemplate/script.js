
//    document.addEventListener('DOMContentLoaded', function () {
//        // Get tab elements
//        const tabs = document.querySelectorAll('.search-tab');
//        const sections = document.querySelectorAll('.search-section');

//        tabs.forEach((tab) => {
//            tab.addEventListener('click', () => {
//                // Remove 'active' class from all tabs and sections
//                tabs.forEach(t => t.classList.remove('active'));
//                sections.forEach(s => s.classList.remove('active'));

//                // Add 'active' class to the clicked tab and corresponding section
//                tab.classList.add('active');
//                const targetId = tab.id.replace('btn', '');
//                const targetSection = document.querySelector(`#${targetId.toLowerCase()}Search`);
//                if (targetSection) {
//                    targetSection.classList.add('active');
//                }
//            });
//        });
//    });

