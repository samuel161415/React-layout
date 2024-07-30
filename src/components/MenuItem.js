import React,{useState} from 'react'
import { useRouter } from "next/router";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import Link from 'next/link';

const MenuItem = ({ icon, name, route, subOptions, setter }) => {
    // Highlight menu item based on currently displayed route

    const [expanded, setExpanded] = useState(null);

    const router = useRouter();
    const colorClass =
      router.pathname === route
        ? "text-white"
        : "text-white/50 hover:text-white";

    return (
      <>
        <div
          onClick={() => {
            if (subOptions) {
              setExpanded(expanded === name ? null : name);
            } else {
              router.push(route);
              setter((oldVal) => !oldVal);
            }
          }}
          className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 cursor-pointer ${colorClass}`}
        >
          <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
          <div className="flex-grow">{name}</div>
          {subOptions && (
            <div className="text-xl flex [&>*]:mx-auto w-[30px]">
              {expanded === name ? <BsChevronDown /> : <BsChevronRight />}
            </div>
          )}
        </div>
        {subOptions && expanded === name && (
          <div className="flex flex-col ml-8">
            {subOptions.map((subOption) => (
              <Link href={subOption.route} key={subOption.name}>
                <div className="flex gap-1 text-md py-2 pl-6 border-b-[1px] border-b-white/10 text-white/50 hover:text-white cursor-pointer">
                  <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {subOption.icon}
                  </div>
                  <div>{subOption.name}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </>
    );
  };

export default MenuItem