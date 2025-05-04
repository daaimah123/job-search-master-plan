# Career Strategy Navigator

An interactive application for creating personalized career strategies with role-specific implementation plans, case studies, and accelerated application timelines.

## Local Development Setup

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/career-strategy-navigator.git
   cd career-strategy-navigator
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and data models
- `/public` - Static assets

### Data Structure

The application uses several data files to generate personalized career strategies:

- `lib/user-data.ts` - User accomplishments, skills, and self-reflection
- `lib/role-data.ts` - Role-specific requirements and descriptions
- `lib/implementation-plan-data.ts` - Standard and accelerated implementation plans
- `lib/case-studies-data.ts` - Case studies tailored to specific roles

To customize the application with your own data, modify these files with your personal information.

## Features

- Role-specific career strategies
- 90-day implementation plans
- Accelerated application timelines
- Case study builder
- Company and role analysis
- Progress tracking

## Troubleshooting

If you encounter any issues running the application locally, try the following:

1. Clear the Next.js cache:
   \`\`\`bash
   rm -rf .next
   \`\`\`

2. Ensure all dependencies are installed:
   \`\`\`bash
   npm install
   \`\`\`

3. Check for TypeScript errors:
   \`\`\`bash
   npx tsc --noEmit
   \`\`\`

4. If you encounter module resolution errors, check your `tsconfig.json` paths.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
\`\`\`

With these files in place, the Career Strategy Navigator application should be ready to run locally. The data structures provide a foundation for generating customized master plans based on the user's accomplishments, metrics, and self-reflection details.
