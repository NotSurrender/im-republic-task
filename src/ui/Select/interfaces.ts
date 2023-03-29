export interface SelectProps {
  id: string;
  disabled?: boolean;
  options: SelectOption[];
  multiple?: boolean;
  className?: string;
  onChange?: (event: string[]) => void;
}

export interface SelectOption {
  value: string;
  text: string;
  selected?: boolean;
}
