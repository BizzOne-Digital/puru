import {
  Settings, Factory, Package, Wheat, Building2, Search, Layers, Boxes,
  ShoppingBag, ArrowLeftRight, Star, Download, Upload, Truck, Handshake,
} from 'lucide-react';

export const iconMap = {
  Settings,
  Factory,
  Package,
  Wheat,
  Building2,
  Search,
  Layers,
  Boxes,
  ShoppingBag,
  ArrowLeftRight,
  Star,
  Download,
  Upload,
  Truck,
  Handshake,
} as const;

export type IconName = keyof typeof iconMap;

export function getIcon(name: IconName) {
  return iconMap[name];
}
