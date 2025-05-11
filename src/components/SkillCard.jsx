export default function SkillCard({Icon, label, color}) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow flex items-center gap-3">
            <Icon className={`h-6 w-6 ${color}`}/>
            <span>{label}</span>
        </div>
    );
}
