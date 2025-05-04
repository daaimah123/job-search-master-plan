
# 🚀 Job Search Master Plan Strategy

> My personal mission control for launching my dream career! 🌟

## What is this magical tool? ✨

Job Search Master Plan Strategy is a personalized application for creating tailored career strategies with role-specific implementation plans, case studies, and accelerated application timelines based on my professional accomplishments and experiences. This application serves as my personal career development tool, leveraging my professional accomplishments, metrics, and self-reflections to generate customized career strategies for specific roles and companies. It combines structured data with AI-powered analysis to create comprehensive master plans that align my experience with potential employers' needs.

## Features that make you go "Wow!" 🤩

- **🎯 Targeted Role Strategies**: Create customized strategies for specific roles at specific companies
- **📊 90-Day Implementation Plans**: Practical, day-by-day action plans to prepare for a dream role
- **⚡ Accelerated Plans**: Need to apply ASAP? I've enabled turbo-charged plan alternatives!
- **📝 Case Study Builder**: Craft compelling stories that showcase my skills and experience
- **📄 Resume & Cover Letter Frameworks**: Templates tailored to each role and company
- **🎭 Interview Preparation**: Company-specific interview strategies and practice questions
- **🌱 Well-Being Integration**: Because career success shouldn't come at the cost of health
- **🔮 Future Pathways**: See where this role could take you in 3-5 years
- **➡️ Next Steps Generator**: Never wonder "what should I do next?" again!

## Data Provider Integration

The `data-provider.tsx` component is the cornerstone of this application, containing:

- **Accomplishments**: 18 detailed professional achievements with challenges, solutions, and outcomes
- **Metrics**: Quantifiable results that demonstrate impact
- **Self-Reflection**: Personal obstacles overcome and sources of joy
- **Problem-Solving Insights**: Strengths and natural abilities
- **Skills and Goals**: Core competencies and career objectives

This structured data serves as the foundation for AI-generated career strategies. When I explore a new role, the AI uses this data to:

1. Analyze the role requirements and company needs
2. Match my accomplishments to the specific requirements
3. Identify relevant case studies that demonstrate my capabilities
4. Create tailored implementation plans based on my proven skills
5. Generate accelerated timelines that leverage my experience

## AI Prompting Strategy

The AI uses sophisticated prompting to build each master plan:

1. **Customer Analysis**: "Analyze [Company]'s business challenges and how Daaimah's experience in [relevant accomplishments] addresses their needs in the [Role] position."
2. **Edge Statement**: "Create a compelling edge statement that positions Daaimah's unique combination of [relevant skills] as the ideal solution for [Company]'s [specific challenges]."
3. **Case Studies**: "Select and adapt Daaimah's most relevant accomplishments to create targeted case studies that demonstrate her ability to solve [Company]'s specific challenges in the [Role] position."
4. **Implementation Plan**: "Create a 90-day implementation plan for Daaimah in the [Role] position at [Company], leveraging her experience in [relevant accomplishments] to address [specific company challenges]."
5. **Accelerated Plan**: "Develop an accelerated timeline showing how Daaimah's existing expertise can compress the standard onboarding and impact timeline for the [Role] position at [Company]."

## Getting Started 🏁

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

```bash
# Clone this repository
git clone https://github.com/daaimah123/job-search-master-plan.git

# Navigate to the project directory
cd job-search-master-plan

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Troubleshooting 🛠️

If you encounter any issues running the application locally, try the following:

1. Clear the Next.js cache:

```shellscript
rm -rf .next
```

2. Ensure all dependencies are installed:

```shellscript
npm install
```

3. Check for TypeScript errors:

```shellscript
npx tsc --noEmit
```

4. If you encounter module resolution errors, check your `tsconfig.json` paths.

## How to Use 🧠

1. **Browse Existing Roles**: Check out pre-built strategies for popular roles
2. **Create a New Role**: Add a new role by providing the job description URL and basic details
3. **Navigate the 10 Strategy Sections**: Each role has 10 standardized sections to guide my job search preparation
4. **Implement Your Plan**: Follow the 90-day implementation plan or the accelerated version
5. **Track Your Progress**: Mark milestones as the work strategy is completed at various stages

## Project Structure 🏗️

```plaintext
/app
  /roles
    /[company]      # Dynamic routes for each company
      /customer     # Understanding the company's needs
      /edge         # Your unique value proposition
      /case-studies # Examples demonstrating your abilities
      /materials    # Resume and cover letter frameworks
      /closing      # Interview preparation
      /well-being   # Maintaining personal balance
      /future       # Career options beyond this role
      /next-steps   # Actions to strengthen your application
      /implementation # Timeline for execution
      /accelerated-plan # Fast-track application strategy
/components         # Reusable UI components
/lib                # Utility functions and type definitions
```

## Updating the Application 👷🏾‍♀️

The modular design of the application ensures that as my career evolves and new data is added, the AI-generated master plans will become increasingly sophisticated and tailored to specific opportunities.

### Adding New Roles

When adding new roles, the following areas need to be updated:

1. **API Routes**: The `/api/generate-plan` endpoint needs to handle new role types
2. **Role-Specific Pages**: Create new directories under `/app/roles/[company]/` for each new role
3. **Navigation**: Update the role selection UI in `/app/roles/page.tsx`
4. **Dynamic Role Page**: The `/app/roles/[company]/page.tsx` file will automatically handle new roles

### Adding New Personal Data

When updating personal information, the following areas need to be modified:

1. **Data Provider**: Update `components/providers/data-provider.tsx` with:
   1. New accomplishments (add to the accomplishments array)
   2. New case study buckets (add to the CaseStudyBucket type)
   3. New metrics (add to the metrics object)
   4. New self-reflections (add to the selfReflection object)
2. **Type Definitions**: If adding new categories of data, update the UserData type
3. **Display Components**: Update the following components if new data types are added:
   1. `components/accomplishments-display.tsx`
   2. `components/self-reflection-display.tsx`

### Impact on Future Master Plans

Updates to the data provider will have the following effects on future master plans:

1. **New Accomplishments**: Provide the AI with more examples to draw from, potentially creating more targeted and relevant case studies for specific roles
2. **New Case Study Buckets**: Allow for more precise categorization and matching of experiences to role requirements
3. **New Metrics**: Strengthen the quantitative evidence of impact, making edge statements and case studies more compelling
4. **New Self-Reflections**: Provide deeper insights into personal growth and resilience, which can be leveraged for cultural fit narratives
5. **AI Adaptation**: The AI will automatically incorporate new data into its analysis, creating more comprehensive and nuanced master plans as the data grows richer

## Remember... 💭

Your career is a journey, not a destination. This tool is here to help you navigate that journey with confidence, clarity, and a touch of fun!

Happy career planning! 🎉
