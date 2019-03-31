# Cognitive Complexity: 2
def method1()
  if obj && obj.func?
    return true
  end

  false
end

# Cognitive Complexity: 1
def method2()
  if obj&.obj.func?
    return true
  end

  false
end

# Cognitive Complexity: 0
def method3()
  obj&.obj.func?
end
