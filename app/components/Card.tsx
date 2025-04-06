export default function Card({ title, content}: { title: string, content: string}) {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{content}</p>
        </div>
    )
}