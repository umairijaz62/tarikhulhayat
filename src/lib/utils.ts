
export function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

