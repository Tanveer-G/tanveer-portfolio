export default function SkillCapsule({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-gray-700 bg-gray-800 px-2 py-1 text-xs">
      {label}
    </span>
  );
}
