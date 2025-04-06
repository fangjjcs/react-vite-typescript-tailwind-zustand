# MainControl

Created: April 6, 2025 9:04 PM

mainControlStore.tsx

```jsx
options: {
	smpTypes: [],
	groups: [] 
},
selectedSmpType: "",
contentView: {
	view: "",
	tab: "",
	level: ""
},
selectedGroup: {
	name: "",
	fab: "",
	toolModule: ""
},
signoffType: "eform"
```

mainControlStoreType

```tsx
type SmpType {
	id: string;
	name: string;
}

type Group {
	mainframe: null | DcGroup[];
	processGroup: null | DefenseGroup[];
}

type DcGroup {
	id: string;
	dcGroup: string;
	groupDetail: null | GroupDetail[]
}

type DefenseGroup {
	id: string;
	defenseGroup: string;
	groupDetail: null | GroupDetail[]
}

type GroupDetail {
	fab: string;
	tool: null | ToolModule[];
}

type ToolModule {
	toolId: string;
	moduleId: null | string;
}
```

樹狀結構(groups) 透過點擊不同物件，會帶出不同 view，有些 view 有 tab 分頁，有些 view 有 level 之分。底下共有三種 view。

| view | smpType | dcGroup | defenseGroup |
| --- | --- | --- | --- |
| tab | overall,mainframe,processGroup,recipeList | dcGroup,transformation | dc,window,spec,simulation |
| level |  | group,fab,toolModule | group,fab,toolModule |

底下示範分別點擊樹狀結構的不同物件，setContentView 要帶入什麼值(關聯 default 帶出的畫面)

| main control on click item | view | tab | level |
| --- | --- | --- | --- |
| SMP Type | smpType | overall | null |
| Mainframe | smpType | mainframe | null |
| Process Group | smpType | processGroup | null |
| DC Group (group level) | dcGroup | dcGroup | group |
| DC Group (fab level) | dcGroup | dcGroup | fab |
| DC Group (tool level) | dcGroup | dcGroup | toolModule |
| Defense Group (group level) | defenseGroup | dc | group |
| Defense Group (fab level) | defenseGroup | spec | fab |
| Defense Group (tool level) | defenseGroup | spec | toolModule |

底下示範分別點擊樹狀結構的不同物件，setSelectedGroup 要帶入什麼值

| main control on click item | name | fab | toolModule |
| --- | --- | --- | --- |
| SMP Type | {SMP Type} | null | null |
| Mainframe | Mainframe | null | null |
| Process Group | {Process Group} | null | null |
| DC Group | {DC Group} | null | null |
| DC Group (FAB12) | {DC Group} | FAB12 | null |
| DC Group (FAB12 > ToolA-CH1) | {DC Group} | FAB12 | ToolA-CH1 |
| Defense Group | {Defense Group} | null | null |
| Defense Group (FAB20) | {Defense Group} | FAB20 | null |
| Defense Group (FAB20 > ToolB-CH1) | {Defense Group} | FAB20 | ToolB-CH1 |

API interface

| url | method | request body | response |
| --- | --- | --- | --- |
| /privilege | GET |  |  |
| /option/smpTypes | GET |  |  |
| /option/groups | GET |  |  |
| /option/groupDetail | GET |  |  |
| /option/moduleCategory | GET |  |  |
| /config/dcGroup | GET |  |  |
| /config/svidDetail | GET |  |  |
