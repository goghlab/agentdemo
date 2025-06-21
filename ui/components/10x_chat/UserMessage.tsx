import { Markdown, UserMessageProps } from "@copilotkit/react-ui";
import { Avatar, Format, AvatarSize} from "@leafygreen-ui/avatar";
// import Card from "@leafygreen-ui/card";

export const CustomUserMessage = (props: UserMessageProps) => {
  const wrapperStyles = "flex items-end gap-2 justify-end mt-4 w-full";
  const messageStyles = "bg-emerald-500 flex items-end justify-end text-white"
  const avatarStyles = "text-sm bg-emerald-500"
 
  return (
    <div className={wrapperStyles}>
      <div
        className={messageStyles}
        style={{ borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", padding: 12, maxWidth: 320 }}
      >
        <Markdown content={props.message || ""} />
      </div>
      <Avatar format={Format.Icon} glyph="Person" size={AvatarSize.XLarge} className={avatarStyles} />
    </div>
  );
};
