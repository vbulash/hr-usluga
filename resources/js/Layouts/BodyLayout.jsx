export default function BodyLayout({ children }) {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-start-2 col-span-10">
                {children}
            </div>
        </div>
    );
}
