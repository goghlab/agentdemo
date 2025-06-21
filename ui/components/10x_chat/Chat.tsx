import { CopilotChat } from "@copilotkit/react-ui";
import { Header } from "@/components/10x_chat/Header";
import { CustomUserMessage } from "@/components/10x_chat/UserMessage";
import { CustomAssistantMessage } from "@/components/10x_chat/AssistantMessage";
import { CustomResponseButton } from "@/components/10x_chat/ResponseButton";
import ContactInfo from "./generative-ui/ContactInfo";
import { useCopilotAction } from "@copilotkit/react-core";
import { Footer } from "./Footer";
import Link from "next/link";

export function Chat({className}: {className?: string}) {

  useCopilotAction({
    name: "contactInfo",
    description: "Collect contact information from the user",
    renderAndWaitForResponse: ({respond, status}) => {
      if (status === "complete") return <></>;
      return <ContactInfo onSubmit={(form) => respond?.(form)} />;
    },
  });

  return (
    <div>
      <Header />
      <div className="flex gap-6 justify-center mt-2 mb-4 text-sm">
        <Link href="/about" className="text-blue-600 underline hover:text-blue-800">關於</Link>
        <a href="/10X.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">10X(PDF)下載</a>
      </div>
      <div className="text-center mb-4">
        <img src="/pool.png" alt="泳池" className="w-[300px] mx-auto" />
        <h1 className="text-2xl font-bold mt-4 mb-2 animate-bounce">🔥 10X 海豚學習法 強勢登場！</h1>
        <p className="text-lg text-gray-700">「6個月由怕水變飛魚？我哋10X方法專治游極都唔識！」</p>
      </div>
      <CopilotChat
        className={`rounded-xl border border-t-0 rounded-t-none shadow-xl ${className}`}
        UserMessage={CustomUserMessage}
        AssistantMessage={CustomAssistantMessage}
        labels={{
          initial: "你好！我係 V Sir，10X超絕游泳極速學習法嘅創辦人。\n\n✧ 10X獨家承諾： ✅ 5堂突破怕水心魔 ✅ 12堂穩固基礎泳式 ✅ 24堂四式全能\n\n⚠️ 警告： 傳統教練仲教緊浮板踢水？你嘅小朋友已經落後緊！\n「而家就話我知：你小朋友最想突破咩？我即刻比個10X極速方案你！」"
        }}
      />
      <Footer />
    </div>
  );
}