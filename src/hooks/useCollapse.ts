import { useState } from 'react';

type TId = string | number;

export default () => {
  const [visibleCollapseItems, setVisibleCollapseItems] = useState<TId[]>([]);

  const handleCollapse = (id: TId) => () =>
    setVisibleCollapseItems((prev) =>
      prev.includes(id)
        ? prev.filter((prevId) => prevId !== id)
        : [...prev, id],
    );

  const checkIsExpanded = (id: TId) => visibleCollapseItems.includes(id);

  return { visibleCollapseItems, handleCollapse, checkIsExpanded };
};
