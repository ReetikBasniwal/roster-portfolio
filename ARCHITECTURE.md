# Portfolio Builder Architecture

## User Flow

1. **Portfolio Creation**
   - User enters a URL (e.g., 'sonuchoudhary.my.canva.site')
   - System extracts portfolio data using `extractPortfolioData`
   - Creates a new portfolio with unique ID and timestamps
   - Stores data in Redux store

2. **Portfolio Editing**
   - **Basic Info Section**
     - User clicks edit button
     - EditableBasicInfoSection component renders
     - User updates information
     - On save:
       1. Updates Redux store immediately for UI responsiveness
       2. Calls API to persist changes
       3. Shows success/error toast notification
   
   - **Employer Cards**
     - User clicks edit button on employer card
     - EditableEmployerCard component renders
     - User updates employer information
     - On save:
       1. Updates Redux store immediately
       2. Calls API to persist changes
       3. Shows success/error toast notification

## Component Structure

### View Components
- `BasicInfoSection`: Displays user's basic information
- `EmployerCard`: Displays individual employer information
- `VideoGallery`: Displays video content for each employer

### Editable Components
- `EditableBasicInfoSection`: Form for editing basic information
- `EditableEmployerCard`: Form for editing employer information

### Shared Components
- `Button`, `Input`, `Textarea`: Reusable UI components
- `Card`, `CardContent`: Layout components

## State Management

### Redux Store Structure
```typescript
interface PortfolioState {
  profile: Portfolio | null;
  loading: boolean;
  error: string | null;
}
```

### Actions
- `addProfile`: Adds new portfolio to store
- `updateBasicInfo`: Updates basic information
- `updateEmployer`: Updates employer information

### Data Flow
1. **Read Operations**
   - Components read data from Redux store using `useAppSelector`
   - Data is normalized and cached in store

2. **Write Operations**
   - Components dispatch actions to update store
   - API calls are made to persist changes
   - Store is updated with API response

## Scalability & Edge Cases

### Scalability Considerations
1. **Data Structure**
   - Portfolio data is normalized
   - Efficient updates using immutable patterns
   - Minimal re-renders through proper state management

2. **Performance**
   - Immediate UI updates with optimistic updates
   - API calls are debounced/throttled
   - Large datasets handled through pagination

3. **Code Organization**
   - Components are modular and reusable
   - Clear separation of concerns
   - Type safety with TypeScript

### Edge Case Handling
1. **Error States**
   - API failures handled with error boundaries
   - Toast notifications for user feedback
   - Fallback UI for loading states

2. **Data Validation**
   - Form validation using Formik
   - Type checking with TypeScript
   - API response validation

3. **Concurrent Updates**
   - Optimistic updates prevent UI blocking
   - Error handling for failed updates
   - State rollback on failure