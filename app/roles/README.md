# Role Structure Documentation

This directory contains all role-specific content organized by company.

## Directory Structure

\`\`\`
/roles
  /[company]                # Company-specific directory (e.g., intuit, datadog)
    /page.tsx               # Company landing page with all sections
    /[section]              # Section-specific directory (e.g., customer, edge)
      /page.tsx             # Section content page
\`\`\`

## Standard Sections

Each role should implement these 10 standard sections:

1. **customer** - Company analysis and needs assessment
2. **edge** - Value proposition and core strengths
3. **case-studies** - Relevant experience examples
4. **materials** - Resume and cover letter frameworks
5. **closing** - Interview preparation strategies
6. **well-being** - Personal balance strategies
7. **future** - Future career pathways
8. **next-steps** - Application strengthening actions
9. **implementation** - Execution timeline
10. **accelerated-plan** - Fast-track strategy

## Adding a New Role

1. Create a new company directory
2. Copy the template files from an existing role
3. Update all content to be specific to the new role
4. Ensure all navigation links are updated
5. Add the new role to the roles landing page
\`\`\`

Now, let's clean up the structure by removing the product-manager folder and its contents:

```typescriptreact file="app/roles/product-manager/page.tsx" isDeleted="true"
...deleted...
