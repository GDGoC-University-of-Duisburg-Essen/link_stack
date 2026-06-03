# ⛃ GDG Link Stack
![GDGoC Essen](https://img.shields.io/badge/Community-GDGoC%20Essen-blue?style=for-the-badge&logo=google)

This is the official Link Stack for the **Google Developer Group (GDG) On Campus University of Duisburg-Essen**. 
It aggregates all important links to our channels, presentations, and resources.

## 🚀 Local Development

1. Clone the repository and navigate into the folder:
   ```bash
   git clone git@github.com:GDGoC-University-of-Duisburg-Essen/link_stack.git
   cd link_stack
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ➕ Adding New Links

All links are centrally managed in `src/config/links.ts`.

1. Open `src/config/links.ts`.
2. Add a new object to the `links` array:

   ```typescript
   {
     id: 'unique-id',
     url: 'https://your-link.com',
     de: 'German Title',
     en: 'English Title',
     iconType: 'react-icon', // or 'image'
     iconValue: 'FaLink', // React Icon name or image path (e.g., '/assets/image.png')
   }
   ```
