import { ComboBox, type ComboBoxProps } from "@hilla/react-components/ComboBox.js";

// Component props can be inferred from the parameter type
// type ComboBoxProps<T> = Parameters<typeof ComboBox<T>>[0];

// Omit the props defined by the customized wrapper 
type InheritedComboBoxProps<T> = Omit<
ComboBoxProps<T>,
  'items' | 'itemValuePath' | 'itemLabelPath'
  >;

export enum MealType {
  Breakfast = 'breakfast',
  Lunch = 'lunch',
  Dinner = 'dinner',
}

export type MealSelectorProps = InheritedComboBoxProps<MealItem> & Readonly<{
  mealType: MealType;
}>;

export type MealItem = Readonly<{
  label: string;
  value: string;
}>;

export const mealItems: MealItem[] = [
  {
    label: 'Bread & butter',
    value: 'bread-n-butter',
  },
  {
    label: 'Salmon Salad',
    value: 'salmon-salad',
  },
  {
    label: 'Spinach Soup',
    value: 'spinach-soup',
  },
];

// NOTE: make sure to pass or forward `ref`

export function MealSelector({ label, mealType, ...props }: MealSelectorProps) {
  return <ComboBox<MealItem>
    label={`${label ?? ''} ${mealType}`}
    items={mealItems}
    itemLabelPath="label"
    itemValuePath="value"
    {...props}
  />;
}
