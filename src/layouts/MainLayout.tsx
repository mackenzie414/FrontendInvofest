import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <main className="max-w-6xl mx-auto py-10 px-16 w-full">
                <Outlet />
            </main>
            <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-100">
                <p>&copy; 2025 Invofest. All rights reserved.</p>
            </footer>
        </div>
    )
}