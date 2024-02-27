import { ReactNode } from 'react';
import { ItemList } from '../ItemList/ItemList';

// Types
import { MainSectionProps } from '@/types/searchbar';

export const MainSection = ({typing, optionFilter, itemsW, items, selectedItemIndex, inputValue}: MainSectionProps) => (
    <div className='flex-1 ' style={{ overflowY: 'auto' }}>
        <div>
        {typing && inputValue.length > 0 ?
            <ItemList optionFilter={optionFilter} items={itemsW} selectedSubItem={selectedItemIndex} typing={typing}/>
        :  
            <ItemList optionFilter={optionFilter} items={items} selectedSubItem={selectedItemIndex} typing={typing}/>
        }
        </div>
    </div>
)