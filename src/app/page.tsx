export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">Document Vault</h1>
            <p className="mt-4 text-lg text-gray-600">
                Welcome to Document Vault. Please{" "}
                <a href="/login" className="text-blue-600 underline">
                    log in
                </a>{" "}
                or{" "}
                <a href="/register" className="text-blue-600 underline">
                    register
                </a>{" "}
                to get started.
            </p>
        </main>
    );
}
