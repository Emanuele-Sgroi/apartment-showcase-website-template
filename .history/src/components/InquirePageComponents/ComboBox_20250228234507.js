"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

/**
 * A reusable ComboBox with no search input,
 * built from the ShadCN "ComboboxDemo" snippet.
 */
export function ComboBox({
  items = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  className = "",
}) {
  const [open, setOpen] = React.useState(false);

  const labelForValue = React.useMemo(() => {
    return items.find((i) => i.value === value)?.label || "";
  }, [items, value]);

  const handleSelect = (selectedValue) => {
    onChange(selectedValue === value ? "" : selectedValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between h-10 w-full !border-t-0 !border-x-0 ", // standard height
            className
          )}
        >
          {labelForValue || placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-[200px] overflow-hidden luxury-scrollbar"
        //  apply your custom scrollbar class here
      >
        <Command>
          {/* Remove the search input so it's just a static list */}
          <CommandList className="max-h-52 overflow-auto luxury-scrollbar">
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={handleSelect}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
