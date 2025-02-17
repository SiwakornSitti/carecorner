"use client";

import { FC, useState, Fragment } from "react";
import { Button } from "@heroui/button";
import { Option } from "@/constants/products";
import Price from "@/components/Price";
import classNames from "classnames";

export type OptionsProps = {
  data?: Option[];
};

const Options: FC<OptionsProps> = ({ data = [] }) => {
  const [selected, setSelected] = useState(data?.[0]?.options?.[0]);
  const [selectedLabel, setSelectedLabel] = useState(data?.[0]?.label);

  return (
    <section>
      {data?.map((each) => {
        return (
          <Fragment key={each.label}>
            <div className="font-semibold mb-2 text-secondary-brown">
              {each.label}
            </div>
            <div className="flex gap-x-2 mb-2">
              {each?.options?.map((option) => {
                return (
                  <Button
                    className={classNames(
                      "border-primary-mustard border bg-white text-secondary-brown",
                      {
                        "bg-secondary-yellow":
                          `${each.label}-${option.value}` ===
                          `${selectedLabel}-${selected?.value}`,
                      }
                    )}
                    key={`${each.label}-${option.value}`}
                    onClick={() => {
                      setSelected(option);
                      setSelectedLabel(each.label);
                    }}
                  >
                    {option.label}
                  </Button>
                );
              })}
            </div>
          </Fragment>
        );
      })}

      <Price price={selected?.beforeDiscount} discountPrice={selected?.value} />
    </section>
  );
};

export default Options;
