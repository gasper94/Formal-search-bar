import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Types
import { Props, SubItemListProps, Product, ItemListProps } from '@/types/searchbar';

// Components
import { iconMapping } from '../../Constants/IconMapping/IconsMapping';

const ProductRow = ({ subItem, sectionColor, selectedSubItem, typing }: Props) => {
  const itemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (selectedSubItem === subItem.id && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [selectedSubItem, subItem.id]);

  return (
    <motion.button
      ref={itemRef}
      animate={{ backgroundColor: selectedSubItem === subItem.id ? 'white' : 'transparent' }}
      whileHover={{ scale: 1.001, backgroundColor: 'white' }}
      transition={{ duration: 0.2 }}
      key={subItem.id}
      data-key={subItem.id}
      className='w-full flex flex-row justify-between items-center px-4 py-2 rounded-2xl'
    >
      <div className='flex flex-row items-center gap-4' style={{ backgroundColor: 'transparent', border: 'none' }}>
        <div style={{ backgroundColor: sectionColor }} className='px-3 py-3 rounded-lg'>
          {iconMapping[subItem.title]}
        </div>
        <p className='text-lg text-black font-semibold'>{subItem.title}</p>

        <div className='flex flex-row'>
          {typing &&
            subItem.keywordType1 &&
            subItem.keywordType1.map((keyword: any, index: any) => (
              <div key={index} className='text-blue-700 bg-blue-100 font-semibold px-3 py-1 rounded-md text-sm'>
                {keyword}
              </div>
            ))}
        </div>

        <div className='flex flex-row'>
          {typing &&
            subItem.keywordType2 &&
            subItem.keywordType2.map((keyword: any, index: any) => (
              <div key={index} className='text-green-700 bg-green-100 font-semibold px-3 py-1 rounded-md text-sm'>
                {keyword}
              </div>
            ))}
        </div>

        {typing ? (
          <div className='text-gray-400 mt-1'>{subItem.description2}</div>
        ) : (
          <div className='text-gray-400 mt-1'>{subItem.description}</div>
        )}
      </div>
      {!typing && (
        <div>
          <div className='flex justify-center items-center h-8 bg-white px-3 py-2 rounded-xl gap-1 shadow-md border-gray-200 border-[0.5px]'>
            {iconMapping[subItem.cmd]}
          </div>
        </div>
      )}
    </motion.button>
  );
};


const SubItemList = ({ subItems, sectionColor, selectedSubItem, typing }: SubItemListProps) => {
  return (
    <ul>
      {subItems.map((subItem: Product, index: number) => (
        <div key={index}>
          <ProductRow subItem={subItem} sectionColor={sectionColor} selectedSubItem={selectedSubItem} typing={typing} />
        </div>
      ))}
    </ul>
  );
};

export const ItemList = ({ optionFilter, items, selectedSubItem, typing }: ItemListProps) => (
  <ul>
    {items
      .filter((item) => optionFilter === 'ALL' || optionFilter === item.title)
      .map((item) => (
        <li key={item.id}>
          <div className='px-4 py-2 text-gray-400 font-semibold'>{item.title}</div>
          {item.subItems && (
            <SubItemList subItems={item.subItems} sectionColor={item.sectionColor || ''} selectedSubItem={selectedSubItem} typing={typing} />
          )}
        </li>
      ))}
  </ul>
);
