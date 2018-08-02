title: Strongly typed GraphQL
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->

.bottom-bar[
**{{title}}** .small[*by Daniel Krejčí*]
]

---

class: impact

# {{title}}

## with TypeScript

---

---

# GraphQL vs REST

### REST

- Vícenásobný počet endpointů a každý poskytne serverem definovanou sadu dat
- Pro související data je nutné zavolat další endpoint separatně
- Potřebujete vytvářet a udržovat dokumentaci

### GraphQL

- Jeden endpoint, který poskytne data o která si řekneme
- Dotaz lze neomezeně zanořovat a získat související data naráz
- Schéma představuje společný zdroj pravdy, netřeba nic dalšího

---

# Netypovost JavaScriptu

- Většina lidí to stále považuje za výhodu - proč?
- Můžete dělat téměř cokoliv a později za běhu si vylámat zuby
- Externí zdroj dat - skvělý bolehlav
- Lze řešit pomocí testů, ale to je dost pracné

--

# TypeScript

- Rozšiřuje JavaScript, není to žádný nový jazyk
- V základní konfiguraci nepřidává žádnou extra práci navíc
- Kompiler zachytí chyby, které byste objevovali až za běhu
- Nenahrazuje testy, runtime chyby stále budou, ale v menší míře

---

# Vytváření typů

- Typy pro logický kód nejsou tolik zásadní, ale hodí se
- Otypované ext. datové zdroje = mnohem lehčí život
- Manuální typování jako nouzovka (pro REST)
- Automatické generování typů = heaven

???

REST lze typovat pokud máme dostatečný vzorek dat - viz Sean Grove přednáška v květnu

---

# Automatické typování dat

- GraphQL je postavené kolem schématu - centrální bod
- Schéma definuje strukturu a typy - velké možnosti
- Využitím spouštěných dotazů (queries) získáte velmi silné typování

???

Schéma ja zároveň decentralizované, textový formát a lze jej distribuovat jakkoliv
