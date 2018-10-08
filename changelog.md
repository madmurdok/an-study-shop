# Homework 01
Реализована ветка Task1
Пунткы 1-5 реализованны достаточно сумбурно, в src/app/product-component. 
Там были некоторые эксперименты, и заранее пытался сделать все "красиво" с *ngFor, сервисом и т.п.
С 6 пункта работа велась в src/app/products-list и src/app/cart. Также отдельно выделил src/app/shared  под enum. Хотя возможно сервисы тоже стоило вынести в общее пространство идеалогически.

- При нажатии кнопки Buy me - лог пишется в консоль
- При нажатии Add to cart - данные передаютсяв cart
- Cear cart - очищает козину

# Homework 02
Реализована ветка Task2
- Созданы все модули из теста Д/З
- Реогранизованна структура кода, разделил по моделям/сервисам/директивам и компонентам
- Данные о товарах и содержимом корзины выдаются из сервисов ProductsService, CartService
- Сделаны интерфейсы на ProductModel, CartItemModel
- Директива SetBackgroundDirective отвечает за изменение фона в козине при помощи @HostListener и @HostBinding
- Общение CartService с CartListComponent орагнизованна через observable
- CartItemComponent и CartListComponent общаются через Input и Output
- В CartItemComponent используется директива ngModel и ngModelChange для < input >
- Простановка бордера для ProductComponent реализована через ngClass и @HostLintener
- Title в AppComponent выставляется чере @ViewChild

# Homework 03
Сделана ветка Task3
- Поправлено Issue#5 ( в целом переделал структуру, теперь все разбито по  модулям)
- Добавлены удобные импорты через index.ts для всех компонентов/сервисов/директив/моделей внутри feature-модулей
- Поправлено Issue#6(переименован в CartListComponent)
- Поправлено Issue#3(@ViewChild + ElementRef)
- Issue#4 public cart: Object ==> public cart: CartMapInterface (использую интерфейс из shared/models/intefaces/cart-map.interface)
- Issue#7 - закрыто
- Issue#8 - хочу еще немного поисследовать, работало 2 раза на каждое изменение модели.
- Несколько переработаны и отрефакторенны cart-service, cart-list.component
- В core созданы сервисы: LocalSorageService, ConfigOptionsService, ConstantsService, GeneratorFactory
- Создан ContactModule с компонентом ContactUsComponent (шаблон пока что пустой)
- В ContactUsComponent инджектнуты сервисы ConfigOptionsService, GeneratorFactory с использованием useFactory, LocalStorageService и CONSTANTS с использованием useValue,
также используется @Optional
- В SharedModule добавлена директива HostClickDirective, меняющая размер шрифта тайтла при клике на него мышкой
- ContuctUsComponent пока не тестировал, надо сделать верстку, думаю в HW4 проверю как оно работает и работает ли вообще


## Вопросы
> Не очень понятно как сервисы в CoreModule имплементировать?

> Если я все равно использую токен и useValue для ConstantsService - то по сути он тут лишний?

> Я так понимаю для HostClickDirective подразумевалось что стоит использовать @Host ?

# Homework 04
Создал ветку Task4
- Пайпы для цены и чисел используются в шаблонах: CartListComponent, CartItemComponent, ProductComponent
- Пайп для апперкейса в шаблоне ProductComponent
- getProducts() - возвращает промис, сделана задержка в 2 секунды + async pipe в ProductsListComponent
- Сделан кастомный пайп в SharedModule - OrderByPipe, применяется в CartListComponent совместно с keyvalue пайпом