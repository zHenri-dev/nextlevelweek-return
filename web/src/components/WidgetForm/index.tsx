import { useState } from "react";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: '/bug.svg',
      alt: 'Imagem de um inseto',
    },
    placeholder: "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: '/idea.svg',
      alt: 'Imagem de uma lâmpada',
    },
    placeholder: "Conte com detalhes sua idea...",
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: '/other.svg',
      alt: 'Imagem de um balão de pensamento',
    },
    placeholder: "Conte com detalhes o que está acontecendo...",
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a href="https://github.com/zhenri-dev" className="underline underline-offset-2" target="_blank">zHenri</a>
      </footer>
    </div>
  );
}