import React, { useState } from "react";
import { Card, CardHeader, CardBody, Collapse, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  MenuCategory as MenuCategoryType,
  MenuItem as MenuItemType,
} from "../../types/menu";
import MenuItem from "./MenuItem";
import "./MenuCategory.css";

interface MenuCategoryProps {
  category: MenuCategoryType;
  currency: string;
  onAddToOrder?: (item: MenuItemType) => void;
  onShowDetails?: (item: MenuItemType) => void;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  category,
  currency,
  onAddToOrder,
  onShowDetails,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Card className="menu-category-card w-100">
      <CardHeader className="menu-category-header w-100" onClick={toggle}>
        <h3>{category.name}</h3>
        <Button color="link" className="category-toggle-btn">
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </Button>
      </CardHeader>
      <Collapse isOpen={isOpen} className="w-100">
        <CardBody className="menu-category-content w-100">
          {category.description && (
            <p className="menu-category-description">{category.description}</p>
          )}
          <div className="menu-items-grid w-100">
            {category.items.map((item) => (
              <div key={item.id} className="menu-item-wrapper">
                <MenuItem
                  item={item}
                  currency={currency}
                  onAddToOrder={onAddToOrder}
                  onShowDetails={onShowDetails}
                />
              </div>
            ))}
          </div>
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default MenuCategory;
