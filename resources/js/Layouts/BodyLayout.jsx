export default function BodyLayout({ children }) {
    return (
        <div class="grid grid-cols-12 gap-4">
            <div class="col-start-2 col-span-10">
                {children}
            </div>
        </div>
    );
}
