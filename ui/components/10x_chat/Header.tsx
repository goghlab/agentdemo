import { Avatar, Format, AvatarSize} from "@leafygreen-ui/avatar";
import Badge from "@leafygreen-ui/badge";

export function Header() {
    return (
        <div className="flex items-center justify-center gap-2 border py-4 rounded-t-xl bg-sky-100">
            <img src="/V.png" alt="V Sir" className="w-10 h-10 rounded-full" />
            <span className="text-lg font-bold">10X 海豚學習法</span>
            <Badge variant="blue">Beta</Badge>
        </div>
    )
}