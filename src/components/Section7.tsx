/* eslint-disable @next/next/no-img-element */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What is the average number of influencers for the campaign?",
    answer:
      "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
  },
  {
    question: "Why is influencer marketing critical for social commerce?",
    answer:
      "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
  },
  {
    question: "What is an influencer marketing software?",
    answer:
      "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
  },
  {
    question: "What is an influencer marketing tool?",
    answer:
      "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
  },
  {
    question: "Can you rovide documentation to implement?",
    answer:
      "Vestibulum quis neque nunc. Maecenas pharetra libero id efficitur gravida. Aenean risus enim, coin quam in, consequat nec lacus. Aenean faucibus venenatis aliquet. Sed nulla quam, vehicula ut libe tpat quam. Phasellus semper vitae tellus sit amet scelerisque",
  },
];

const Section7 = () => {
  return (
    <div className="bg-gradient-to-tr from-sky-200 via-orange-50 to-violet-200 py-24">
      <div className="container relative grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-3">
        <div className="col-span-1 flex flex-col gap-8">
          <div className="flex h-max flex-col items-start justify-center">
            <div className="-space-y-1 text-center">
              <span className="text-xl">Our Faq&apos;s</span>
              <img src="/underline.svg" alt="underline" className="h-2" />
            </div>
            <span className="text-4xl font-bold">
              Frequently Asked Questions
            </span>
          </div>
          <p className="text-justify">
            Curabitur a pretium orci, a venenatis diam phasell mi velit.
            Vestibulum et tincidunt.
          </p>
          <div className="h-72 overflow-hidden rounded-xl">
            <img
              src="https://placehold.co/200x200?text=Image"
              alt="illustration"
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-end lg:col-span-2">
          <div className="w-full max-w-3xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="flex w-full flex-col gap-4"
            >
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded border bg-white px-8 py-2"
                >
                  <AccordionTrigger className="text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground duration-1000">
                    <hr className="mb-4" />
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
