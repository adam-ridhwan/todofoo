import { ChevronDown, Menu } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const Header = () => {
  return (
    <>
      <div className='flex h-14 items-center justify-between border-y-2 border-y-border bg-primary-foreground px-5'>
        <button>
          <Menu />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='flex flex-row items-center'>
                    <Avatar className='h-9 w-9'>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <ChevronDown className='h-5 w-5' />
                  </div>
                </TooltipTrigger>

                <TooltipContent align='end'>
                  <div className='flex flex-col'>
                    <span>Adam Ridhwan Amir Hamzah</span>
                    <span>adamridhwan.1@gmail.com</span>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Header;
