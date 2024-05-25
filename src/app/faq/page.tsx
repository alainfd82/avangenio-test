"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
  },
];

const FAQ = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='mx-auto max-w-4xl divide-y divide-gray-900/10'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Frequently asked questions
          </h2>
          <dl className='mt-10 space-y-6 divide-y divide-gray-900/10'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className='flex w-full items-start justify-between text-left text-gray-900'>
                        <span className='text-base font-semibold leading-7'>
                          {faq.question}
                        </span>
                        <span className='ml-6 flex h-7 items-center'>
                          {open ? (
                            <MinusIcon className='h-6 w-6' aria-hidden='true' />
                          ) : (
                            <PlusIcon className='h-6 w-6' aria-hidden='true' />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as='dd' className='mt-2 pr-12'>
                      <p className='text-base leading-7 text-gray-600'>
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
