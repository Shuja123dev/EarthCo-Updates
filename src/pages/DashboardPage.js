import React from 'react'
import StaticComps from '../components/StaticComps'
import DashBoard from '../components/DashBoard'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const DashboardPage = () => {
    useEffect(() => {
        // Define an array of script file paths
        const scriptFiles = [
            './assets/vendor/global/global.min.js',
            './assets/js/custom.js',
            './assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
            './assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
            // './assets/vendor/bootstrap-datetimepicker/js/moment.js',
            // './assets/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
            // './assets/js/dashboard/dashboard-1.js',
            // './assets/vendor/draggable/draggable.js',
            // './assets/vendor/tagify/dist/tagify.js',
            // './assets/vendor/bootstrap-datetimepicker/js/moment.js',
            // './assets/vendor/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
            // './assets/js/deznav-init.js',
            // './assets/js/demo.js',
            // './assets/js/styleSwitcher.js',
            // './assets/vendor/moment/moment.min.js',
            // './assets/vendor/bootstrap-daterangepicker/daterangepicker.js',
            // './assets/vendor/peity/jquery.peity.min.js',
            // './assets/js/plugins-init/piety-init.js',
            // './assets/js/plugins-init/widgets-script-init.js',
            // './assets/vendor/swiper/css/swiper-bundle.min.css',
            // './assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
            // './assets/ajax/libs/noUiSlider/14.6.4/nouislider.min.css',
            // './assets/vendor/jvmap/jquery-jvectormap.css',
            './assets/vendor/tagify/dist/tagify.css',
            './assets/vendor/chart.js/Chart.bundle.min.js',
            './assets/vendor/apexchart/apexchart.js'
        ];

        // Load and execute each script file
        scriptFiles.forEach((filePath) => {
            const script = document.createElement('script');
            script.src = filePath;
            script.async = true;

            document.body.appendChild(script);
        });

        // Clean up the scripts when the component unmounts
        return () => {
            scriptFiles.forEach((filePath) => {
                const script = document.querySelector(`script[src="${filePath}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
    return (
        <>
            <StaticComps />
            <DashBoard />
            <Footer />
        </>
    )
}

export default DashboardPage
