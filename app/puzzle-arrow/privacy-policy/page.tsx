export const metadata = {
    title: "Privacy Policy | Puzzle Arrow",
    description: "Privacy Policy for Puzzle Arrow - Tap Away Game",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 sm:p-12">
                <h1 className="text-3xl font-bold mb-6 text-center text-orange-600 dark:text-orange-500">
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
                    Puzzle Arrow - Tap Away Game
                    <br />
                    Last updated: February 2026
                </p>

                <div className="space-y-8 text-gray-700 dark:text-gray-300">
                    <section>
                        <p className="mb-4">
                            Thank you for playing Puzzle Arrow - Tap Away Game
                            (“the Game”, “we”, “our”, or “us”). This Privacy
                            Policy explains how we collect, use, and protect
                            your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            1. Information We Collect
                        </h2>

                        <h3 className="text-lg font-medium mb-2 mt-4 text-gray-800 dark:text-gray-200">
                            a) Personal Information
                        </h3>
                        <p className="mb-3">
                            We do not collect personally identifiable
                            information such as:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                        </ul>
                        <p className="mb-4">
                            unless you voluntarily provide it (for example, by
                            contacting support).
                        </p>

                        <h3 className="text-lg font-medium mb-2 mt-4 text-gray-800 dark:text-gray-200">
                            b) Non-Personal Information
                        </h3>
                        <p className="mb-3">
                            The Game may collect non-personal information
                            automatically, such as:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Device type</li>
                            <li>Operating system version</li>
                            <li>App version</li>
                            <li>Gameplay statistics</li>
                            <li>Crash reports</li>
                        </ul>
                        <p>
                            This data helps us improve performance and fix bugs.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            2. Advertising
                        </h2>
                        <p className="mb-4">
                            If the Game uses third-party advertising services
                            (such as Google AdMob), these services may collect
                            certain information to show relevant ads.
                        </p>
                        <p className="mb-3">These third parties may collect:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Advertising ID</li>
                            <li>Device information</li>
                            <li>Interaction data</li>
                        </ul>
                        <p>
                            We do not control how third-party services collect
                            or use data. Please review their privacy policies
                            for more information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            3. Analytics
                        </h2>
                        <p className="mb-3">
                            We may use third-party analytics tools to
                            understand:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>How users interact with the Game</li>
                            <li>Which levels are most played</li>
                            <li>Performance issues</li>
                        </ul>
                        <p>
                            This helps us improve gameplay and user experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            4. Children’s Privacy
                        </h2>
                        <p className="mb-3">
                            Puzzle Arrow – Tap Away Game does not knowingly
                            collect personal information from children under 13.
                        </p>
                        <p>
                            If you believe that a child has provided personal
                            information, please contact us and we will remove it
                            promptly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            5. Data Security
                        </h2>
                        <p>
                            We take reasonable measures to protect your
                            information from unauthorized access or disclosure.
                            However, no method of transmission over the internet
                            is 100% secure.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            6. Changes to This Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            Any changes will be posted within the app or on the
                            store listing page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white">
                            7. Contact Us
                        </h2>
                        <p className="mb-2">
                            If you have any questions about this Privacy Policy,
                            you may contact us at:
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:rafeycontact@gmail.com"
                                className="text-orange-600 dark:text-orange-500 hover:underline"
                            >
                                rafeycontact@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
