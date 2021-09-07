import React from "react";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { networks } from "../config";
import Button from "../../../components/Button/Button";
import MenuButton from "./MenuButton";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const NetworkLinks: React.FC = () => (
  <Flex>
    {networks.map((network, index) => {
      const Icon = Icons[network.icon];
      const iconProps = {
        width: "20px",
        color: "text",
        style: { cursor: "pointer" },
      };
      const mr = index < networks.length - 1 ? "2px" : 0;
      if (network.items) {
        return (
          <MenuButton
            scale="sm"
            variant="tertiary"
            marginRight="8px"
          >
          <Dropdown
            key={network.label}
            position="bottom"
            target={<Icon {...iconProps} mr={mr} />}
          >
            {network.items.map((item) => (
              <Link
                external
                key={item.label}
                href={item.href}
                aria-label={item.label}
                color="primary"
              >
                {item.label}
              </Link>
            ))}
          </Dropdown></MenuButton>
        );
      }
      return (
        <Link
          external
          key={network.label}
          aria-label={network.label}
          mr={mr}
          color="primary"
        >
          <Icon {...iconProps} /> {network.label}
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(NetworkLinks, () => true);
