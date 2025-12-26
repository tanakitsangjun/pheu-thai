export interface Policy {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface EconomicMetric {
  name: string;
  value: string | number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface ChartDataPoint {
  year: string;
  gdp: number;
  target: number;
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  image: string;
  expertise: string;
  category: 'executive' | 'economic' | 'strategy' | 'mp';
  province?: string;
  district?: string;
  zone?: string;
}

export interface WarStrategy {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  fullContent?: string; // HTML content for detail view
  tags?: string[]; // Tactical tags
}

export interface EconomicPrinciple {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  fullContent?: string; // New field for detailed modal content
  tags?: string[]; // Small tags for quick context
}