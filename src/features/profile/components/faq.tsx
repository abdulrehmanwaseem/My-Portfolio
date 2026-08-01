import { FAQ as FAQ_ITEMS } from "@/features/profile/data/faq";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function FAQ() {
  return (
    <Panel id="faq">
      <PanelHeader>
        <PanelTitle>FAQ</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <dl className="flex flex-col gap-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="flex flex-col gap-2">
              <dt className="font-medium text-balance">{item.question}</dt>
              <dd className="text-sm text-pretty text-muted-foreground">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </PanelContent>
    </Panel>
  );
}
