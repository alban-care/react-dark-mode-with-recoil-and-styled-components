import { useRecoilState } from "recoil";
import { themeState } from "../../store";
import styled from "styled-components";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

type DarkModeSwitchButtonProps = {
  className?: string;
};

const SwitchButtonWrapper = styled.div`
  --size: 4rem;
  --transition: 0.25s ease-in-out;
  --translateX: translateX(calc(var(--size) / 2)) scale(0.8);

  display: flex;
  align-items: center;
  justify-content: center;
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: var(--size);
    height: calc(var(--size) / 2);
    margin-left: 1rem;
    margin-right: 1rem;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .switch {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: darkgrey;
      -webkit-transition: var(--transition);
      transition: var(--transition);
      border-radius: calc(var(--size) / 2);
      &:before {
        position: absolute;
        content: "";
        width: calc(var(--size) / 2);
        height: calc(var(--size) / 2);
        transform: scale(0.8);
        left: 0;
        top: 0;
        background-color: ${({ theme }) => theme.colors.background};
        -webkit-transition: inherit;
        transition: inherit;
        border-radius: 50%;
      }
    }
    input:checked + .switch {
      &:before {
        -webkit-transform: var(--translateX);
        -ms-transform: var(--translateX);
        transform: var(--translateX);
      }
    }
  }
  .sun-icon,
  .moon-icon {
    width: calc(var(--size) / 3);
    height: calc(var(--size) / 3);
  }
  .moon-icon {
    transform: rotate(15deg);
  }
`;

const DarkModeSwitchButton: React.FC<DarkModeSwitchButtonProps> = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SwitchButtonWrapper>
      <SunIcon />
      <label className="toggle-switch">
        <input type="checkbox" onClick={toggleTheme} />
        <span className="switch" />
      </label>
      <MoonIcon />
    </SwitchButtonWrapper>
  );
};

export default DarkModeSwitchButton;
