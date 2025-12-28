export default function Loading() {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-background z-50">
            <div className="relative flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <div className="absolute inset-2 rounded-full border-4 border-purple-500/20 border-b-purple-500 animate-[spin_1s_ease-in-out_infinite_reverse]" />
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                </div>
            </div>
        </div>
    );
}
