## API

### useDrag

用于将当前组件用作拖动源的钩子。

```js
import { useDrag } from 'react-dnd'

function DraggableComponent(props) {
  const [collectedProps, drag] = useDrag({
    item: { id, type }
  })
  return <div ref={drag}>...</div>
}
```
#### 参量

spec规范对象，有关如何构造此对象的详细信息，请参见下文

#### 返回值数组

Index 0：一个对象，其中包含从collect函数收集的属性。如果collect未定义函数，则返回一个空对象。

Index 1：拖动源的连接器功能。这必须附加到DOM的可拖动部分。

Index 2：用于拖动预览的连接器功能。这可以附加到DOM的预览部分。

#### 规范对象成员

item：必填。一个普通的JavaScript对象，描述了要拖动的数据。这是可用于放置目标的有关拖动源的唯一信息，因此选择它们需要知道的最少数据非常重要。您可能会想在此处添加一个复杂的参考，但是您应该尽力避免这样做，因为它会将拖动源和放置目标结合在一起。{ type, id }从此方法返回类似的内容是个好主意。

item.type必须设置，并且必须是字符串，ES6符号。只有注册为相同类型的放置目标才会对此项目做出反应。阅读概述以了解有关项目和类型的更多信息。

previewOptions： 可选的。描述拖动预览选项的普通JavaScript对象。

options： 可选的。一个普通的对象。如果组件的某些道具不是标量的（即不是原始值或函数），则arePropsEqual(props, otherProps)在options对象内部指定自定义函数可以提高性能。除非您有性能问题，否则不要担心。

begin(monitor)： 可选的。拖动操作开始时触发。不需要返回任何内容，但是如果返回对象，它将覆盖item规范的默认属性。

end(item, monitor)： 可选的。当拖动停止时，end被调用。对于每个begin呼叫，end都会保证有一个对应的呼叫。您可以致电monitor.didDrop()检查是否由兼容的放置目标处理了放置。如果处理了该对象，并且放置目标通过从其方法返回一个普通对象指定了放置结果drop()，则它将作为可用monitor.getDropResult()。此方法是触发磁通动作的好地方。注意：如果拖动时卸载了组件，则将component参数设置为null。

canDrag(monitor)： 可选的。使用它可以指定当前是否允许拖动。如果要始终允许它，则只需忽略此方法。如果您想基于over的谓词禁用拖动，则指定它很方便props。注意：您不能monitor.canDrag()在此方法内调用。

isDragging(monitor)： 可选的。默认情况下，只有启动拖动操作的拖动源才被视为拖动。您可以通过定义自定义isDragging方法来覆盖此行为。它可能会返回类似的信息props.id === monitor.getItem().id。如果原始组件可能在拖动过程中被卸载，然后又与其他父对象“复活”，则执行此操作。例如，在看板中的列表中移动卡时，您希望它保持拖动的外观-即使从技术上讲，每次将其移动到另一个列表时，该组件都会被卸载，而另一个组件也将被挂载。注意：您不能monitor.isDragging()在此方法内调用。

collect： 可选的。收集功能。它应该返回道具的简单对象以返回注入到组件中。它接收两个参数，monitor和props。阅读概述以获取有关监视器和收集功能的介绍。请参阅下一节中详细描述的收集功能。

### useDrop

使用当前组件作为放置目标的钩子。

```js
import { useDrop } from 'react-dnd'

function myDropTarget(props) {
  const [collectedProps, drop] = useDrop({
    accept
  })

  return <div ref={drop}>Drop Target</div>
}
```

#### 参量

spec规范对象，有关如何构造此对象的详细信息，请参见下文

#### 返回值数组

Index 0：一个对象，其中包含从collect函数收集的属性。如果collect未定义函数，则返回一个空对象。

Index 1：放置目标的连接器功能。这必须附加到DOM的放置目标部分。

#### 规范对象成员

accept：必填。字符串，ES6符号，其中一个的数组或返回给定组件的其中一个的函数props。此放置目标将仅对由指定类型的拖动源产生的项目作出反应。阅读概述以了解有关项目和类型的更多信息。

options： 可选的。一个普通的对象。如果组件的某些道具不是标量的（即不是原始值或函数），则arePropsEqual(props, otherProps)在options对象内部指定自定义函数可以提高性能。除非您有性能问题，否则不要担心。

drop(item, monitor)： 可选的。当兼容项目放在目标上时调用。您可以返回undefined或纯对象。如果返回一个对象，它将成为放置结果，并且可用于其拖动源中的endDrag方法monitor.getDropResult()。如果您要根据接收到目标的目标执行不同的操作，这很有用。如果您有嵌套的放置目标，则可以drop通过检查monitor.didDrop()和来测试嵌套目标是否已经处理monitor.getDropResult()。此方法和源endDrag方法都是触发Flux动作的好地方。如果canDrop()已定义并返回，则不会调用此方法false。

hover(item, monitor)： 可选的。将项目悬停在组件上时调用。您可以检查monitor.isOver({ shallow: true })测试悬停是否发生过只是当前的目标，或通过嵌套一个。与drop()此方法不同的是，即使canDrop()已定义并返回该方法也将被调用false。您可以检查monitor.canDrop()是否是这种情况。

canDrop(item, monitor)： 可选的。使用它来指定放置目标是否能够接受该物品。如果要始终允许它，则只需忽略此方法。如果您想基于overprops或谓词来禁用丢弃，则指定它很方便monitor.getItem()。注意：您不能monitor.canDrop()在此方法内调用。

collect： 可选的。收集功能。它应该返回道具的简单对象以返回注入到组件中。它接收两个参数，monitor和props。阅读概述以获取有关监视器和收集功能的介绍。请参阅下一节中详细描述的收集功能。

### useDragLayer

用于将当前组件用作拖动层的钩子。

```js
import { useDragLayer } from 'react-dnd'

function DragLayerComponent(props) {
  const collectedProps = useDragLayer(spec)
  return <div>...</div>
}
```

#### 参量
collect：必填。收集功能。它应该返回道具的简单对象以返回注入到组件中。它接收两个参数，monitor和props。阅读概述以获取有关监视器和收集功能的介绍。请参阅下一节中详细描述的收集功能。

#### 返回值

从collect函数收集的属性的对象。

### DndProvider

DndProvider组件为您的应用程序提供React-DnD功能。必须通过backend道具将其注入后端，但是也可以将其注入window对象。

#### 用法

```js
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export default class YourApp {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        /* Your Drag-and-Drop Application */
      </DndProvider>
    )
  }
}
```

#### 道具
backend：必填。一个React DnD后端 除非您要编写自定义代码，否则您可能要使用React DnD随附的HTML5后端。

context： 可选的。用于配置后端的后端上下文。这取决于后端的实现。

options： 可选的。用于配置后端的选项对象。这取决于后端的实现。

### DragPreviewImage

将HTML Image元素呈现为断开的拖动预览的组件。

#### 用法

```js
import { DragSource, DragPreviewImage } from 'react-dnd'

function DraggableHouse({ connectDragSource, connectDragPreview }) {
  return (
    <>
      <DragPreviewImage src="house_dragged.png" connect={connectDragPreview} />
      <div ref={connectDragSource}>🏠</div>
    </>
  )
}
export default DragSource(
  /* ... */
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  })
)
```

#### 道具
connect：必填。拖动预览连接器功能

---

## 监控状态

### DragSourceMonitor

DragSourceMonitor是传递给的收集功能的对象DragSource。它的方法使您可以获得有关特定拖动源的拖动状态的信息。绑定到该监视器的特定拖动源在下面称为监视器的所有者。

### 方法
canDrag()：true如果没有正在进行的拖动操作，并且所有者的canDrag()返回true或未定义，则返回。

isDragging()：返回true是否正在进行拖动操作，并且所有者发起了拖动，或者isDragging()定义了其并返回true。

getItemType()：返回一个字符串或一个ES6符号，用于标识当前拖动项目的类型。null如果没有项目被拖动，则返回。

getItem()：返回表示当前拖动项目的普通对象。每个拖动源都必须通过从其beginDrag()方法返回一个对象来指定它。null如果没有项目被拖动，则返回。

getDropResult()：返回表示最后记录的放置结果的普通对象。放置目标可以选择通过从其drop()方法返回对象来指定它。drop()自下而上为嵌套目标调度链时，任何从其显式返回其自身结果的父对象将drop()覆盖该子对象先前设置的子对象放置结果。返回null如果在外部调用endDrag()。

didDrop()true如果某个放置目标已经处理了放置事件，false则返回，否则返回。即使目标未返回放置结果，也didDrop()将返回true。在内部使用它endDrag()来测试是否有任何放置目标已处理了放置。返回false如果在外部调用endDrag()。

getInitialClientOffset()：返回{ x, y }当前拖动操作开始时指针的客户端偏移量。null如果没有项目被拖动，则返回。

getInitialSourceClientOffset()：返回{ x, y }当前拖动操作开始时拖动源组件的根DOM节点的客户端偏移量。null如果没有项目被拖动，则返回。

getClientOffset()：返回{ x, y }正在进行拖动操作时指针的最后记录的客户端偏移量。null如果没有项目被拖动，则返回。

getDifferenceFromInitialOffset()：返回{ x, y }当前拖动操作开始时指针的最后记录的客户端偏移量与客户端偏移量之间的差。null如果没有项目被拖动，则返回。

getSourceClientOffset()：{ x, y }根据当前拖动操作开始时的位置和移动差异，返回拖动源组件的根DOM节点的预计客户端偏移量。null如果没有项目被拖动，则返回。
