import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  id?: string;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-xl mx-auto px-3 ${props.yPadding ? props.yPadding : 'py-16'}`}
    id={props.id ? props.id : "A"}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl text-white font-bold">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20 text-gray-500">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
