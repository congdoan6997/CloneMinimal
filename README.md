# Đây là dự án hỗ trợ mọi người hiểu sâu về react và dự án thực tế, clone minimal template.

1. Init - Setup  
  npm create vite@latest  
  -> trong quá trình tạo thì có hỏi vài câu hỏi.

```
√ Project name: ... .
√ Package name: ... cloneminimal
√ Select a framework: » React
√ Select a variant: » TypeScript + SWC
```

npm i - tải node_modules  
npm i prettier  
npm i eslint-config-airbnb-typescript  
npm run dev   

git init   
git status  
git branch  
git add README.md   
git commit -m "#1 feat(readme.md) init project"  
git log  
git log --oneline  
git remote add origin https://github.com/ ... sửa cái link này   
git push -u origin master  
git checkout -b dev   
git push -u origin dev  


Pattern: git commit -m "#IssueNumber feat/chore/config/fix (file? or folder?) mess"

feat - tạo cái gì đó mới.  
chore - sửa cái gì đó.  
config - setting cái gì đó.  
fix - sửa lỗi nào rồi.  

- Tạo một pages  
- Tạo view của page, tạo view trong sections (của page nào thì tạo folder page đấy)  
- Thêm một router trong file main  

```
  {
    element:(<MainLayout>
      <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
    </MainLayout>),
    children:[],
  }
```

dải mainRoutes vào trong useRoutes  
```
...mainRoutes,
```

Box: The Box component serves as a wrapper component for most of the CSS utility needs. The Box component packages all the style functions that are exposed in @mui/system.

Stack: Stack is like a flex container. The Stack component manages layout of immediate children along the vertical or horizontal axis with optional spacing and/or dividers between each child.

Usage of Stack:

Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is column which stacks children vertically.

By default, Stack arranges items vertically in a column. However, the direction prop can be used to position items horizontally in a row as well.

Use the divider prop to insert an element between each child. This works particularly well with the Divider component.

You can switch the direction or spacing values based on the active breakpoint.

Ref: https://mui.com/components/stack/

