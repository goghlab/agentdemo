import { Avatar, Format, AvatarSize} from "@leafygreen-ui/avatar";
import {Spinner} from "@leafygreen-ui/loading-indicator";
import Icon from "@leafygreen-ui/icon";

import "@copilotkit/react-ui/styles.css";
import { AssistantMessageProps, Markdown } from "@copilotkit/react-ui";
import { useCopilotChat } from "@copilotkit/react-core";
import { Header } from "@/components/10x_chat/Header";
 
export const CustomAssistantMessage = (props: AssistantMessageProps) => {
  const { message, isLoading, isGenerating, subComponent, rawData} = props;
  const id = rawData?.id;
  return (
    <div className="py-2">
      <div className="flex items-end gap-2">
        {!subComponent && <img src="/V.png" alt="V Sir" className="w-10 h-10 rounded-full" />}
        {subComponent ? 
          subComponent : 
          <div className="flex w-full justify-start flex-col">
            {message && <Markdown content={message || ""} /> }
            {isLoading && <div className="flex justify-start"><Spinner /></div>}
            {!isGenerating && !isLoading && <ResponseButtons id={id} />}
          </div>
        }
      </div>
    </div>
  );
};

const ResponseButtons = ({ id }: { id: string }) => {
    const { reloadMessages, visibleMessages } = useCopilotChat(); 
    const isLastMessage = visibleMessages[visibleMessages.length - 1]?.id === id;

    return (
        <div className="flex gap-2 items-center mt-6">
            <p className="text-gray-500">How was this response?</p>
            <div><Icon glyph="ThumbsUp" /></div>
            <div><Icon glyph="ThumbsDown" /></div>
            {isLastMessage && 
                <div className="flex gap-2 items-center">
                    |
                    <div><Icon glyph="Refresh" /></div>
                </div>
            }
        </div>
    )
}