
def get_primary_vowel(syllable):
    """Get primary vowel based on the rules."""
    vowels = ['a', 'oo', 'e', 'o', 'i', 'u', 'm', 'n']
    primary_vowel = None
    for vowel in vowels:
        if vowel in syllable:
            if primary_vowel is None or vowels.index(vowel) < vowels.index(primary_vowel):
                primary_vowel = vowel
    return primary_vowel

def get_idx(vowel, syllable):
    """Get index of the vowel in the syllable."""
    return syllable.index(vowel)


# 春 cun1
un_bu = 'un'
vowel = get_primary_vowel(un_bu)
print(f"un_bu = {un_bu}")
print(f"vowel = {vowel}")
print(f"idx = {get_idx(vowel, un_bu)}")
print()

# 眠 bbian2
un_bu = 'ian'
vowel = get_primary_vowel(un_bu)
print(f"un_bu = {un_bu}")
print(f"vowel = {vowel}")
print(f"idx = {get_idx(vowel, un_bu)}")
print()

# 不 but1
un_bu = 'ut'
vowel = get_primary_vowel(un_bu)
print(f"un_bu = {un_bu}")
print(f"vowel = {vowel}")
print(f"idx = {get_idx(vowel, un_bu)}")
print()

# 覺 gak7
un_bu = 'ak'
vowel = get_primary_vowel(un_bu)
print(f"un_bu = {un_bu}")
print(f"vowel = {vowel}")
print(f"idx = {get_idx(vowel, un_bu)}")
print()

# 曉 hiao6
un_bu = 'iao'
vowel = get_primary_vowel(un_bu)
print(f"un_bu = {un_bu}")
print(f"vowel = {vowel}")
print(f"idx = {get_idx(vowel, un_bu)}")
print()