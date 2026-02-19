import { FileX } from 'lucide-react';

export default function AdminPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1a1a] text-white p-6">
            <div className="max-w-[400px] w-full text-center space-y-6">
                <FileX className="w-16 h-16 mx-auto text-[#ED008C]" />
                <h1 className="text-2xl font-black uppercase tracking-tight">CMS Not Configured</h1>
                <p className="text-white/40 leading-relaxed">
                    The Payload CMS has not been installed or configured for this project yet.
                    Please run the installation setup to access the admin panel.
                </p>
                <div className="p-4 bg-black rounded-lg text-left overflow-x-auto">
                    <code className="text-xs font-mono text-white/60">
                        npx create-payload-app@latest
                    </code>
                </div>
            </div>
        </div>
    );
}
