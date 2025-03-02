"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

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
    // 1) Wrap in a relative container so we can measure full width
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            // 2) Force full width & remove extra padding/borders as needed
            className={cn(
              "!w-full justify-between !px-0 h-10 !border-t-0 !border-x-0",
              className
            )}
          >
            {labelForValue || placeholder}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 text-foreground-dark" />
          </Button>
        </PopoverTrigger>

        {/* 3) Use align="start" to ensure left-alignment, 
               plus w-full & no max-width constraints */}
        <PopoverContent
          align="start"
          sideOffset={0}
          className={cn("p-0 w-full !max-w-none border-t-0", "bg-gray-100")}
        >
          <Command>
            <CommandList className="max-h-52 overflow-auto luxury-scrollbar w-full">
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
    </div>
  );
}
