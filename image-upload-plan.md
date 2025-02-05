# Plan: Simplifying Image Upload UI in Chat Component

## Current State
- Uses ImagePreviewModal for showing image preview
- Opens modal when image is selected
- Image selection and upload functionality works well
- Form submission handling is solid

## Proposed Changes

### 1. Remove Image Preview Modal
- Delete ImagePreviewModal component reference
- Remove modal state management
- Remove modal UI elements

### 2. Add Inline Attachment Indicator
- Add new state for tracking image name/info
- Add visual indicator in chat input area when image is selected
- Show filename or "Image attached" text
- Add option to remove attached image

### 3. UI Component Updates
```typescript
// Example structure for attachment indicator
<div className="flex items-center gap-2">
  <Button /* image upload button *//>
  {selectedImage && (
    <div className="flex items-center gap-2 px-2 py-1 bg-muted rounded">
      <span className="text-sm">
        {selectedImage.name}
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => clearSelectedImage()}
      >
        ✕
      </Button>
    </div>
  )}
  <Input /* message input *//>
  <Button /* send button *//>
</div>
```

### 4. Code Changes Required
1. Remove ImagerPreviewModal import
2. Remove isModalOpen state and setIsModalOpen
3. Remove modal JSX component
4. Modify handleImageSelect to not open modal
5. Add clearSelectedImage function
6. Add attachment indicator UI
7. Keep existing FormData submission logic

### 5. Implementation Order
1. Create attachment indicator UI structure
2. Remove modal-related code
3. Add clear image functionality
4. Test image selection and removal
5. Test form submission with attachments

## UI/UX Considerations
- Clear visual feedback when image is selected
- Easy way to remove attached image
- Maintain simplicity of interface
- Keep existing chat message display unchanged

## Testing Points
1. Image selection works as before
2. Attachment indicator shows correct filename
3. Image can be cleared
4. Form submits correctly with image
5. Error handling remains functional

After approval of this plan, we can switch to Code mode to implement these changes.